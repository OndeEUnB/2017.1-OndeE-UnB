module AdminHelper
  def alert_success(message)
    "<div class='alert alert-success'>#{message}</div>"
  end

  def alert_danger(message)
    "<div class='alert alert-danger'>#{message}</div>"
  end

  def edit_link(path)
    link_text = '&#9998;'.html_safe
    link_to link_text, path, class: 'btn btn-info btn-fill btn-xs text-white'
  end

  def destroy_link(path, confirm_text)
    link_text = '&#10005;'.html_safe
    sweet_alert = {
      confirm: 'Are you ready?',
      'sweet-alert-confirm': 'Alerta',
      'confirm-button-text': 'Sim',
      'confirm-button-color': '#DD6B55',
      'cancel-button-text': 'Cancelar',
      'text': confirm_text
    }
    link_to link_text, path, method: :delete,
      class: 'btn btn-danger btn-fill btn-xs text-white ml-1', data: sweet_alert
  end

  def options_for_levels_with_plans(plans, building, selected_level)
    options = []
    plans.each do |plan|
      display = "#{plan.building.acronym} - Nível #{plan.level}"
      selected = false

      if plan.building == building && plan.level == selected_level
        selected = true
      end

      options.push([display, plan.building.id, {
        data: {
          selected: selected,
          level: plan.level,
          image: plan.image_url,
          geo_data: plan.geo_data
        }
      }])
    end

    options_for_select(options).html_safe
  end
end
