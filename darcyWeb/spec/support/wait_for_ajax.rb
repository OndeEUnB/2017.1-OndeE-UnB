module WaitForAjax
  def wait_for_ajax
    Timeout.timeout(Capybara.default_max_wait_time) do
      loop until finished_all_ajax_requests?
    end
  end

  def finished_all_ajax_requests?
    # execute script to check current active ajax requests
    page.evaluate_script('$.active').zero?
  end
end

RSpec.configure do |config|
  config.include WaitForAjax, type: :feature
end
