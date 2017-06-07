require 'rails_helper'

describe 'Map', type: :feature do

  before(:each) do
    unless RSpec.current_example.metadata[:no_rooms]
      # Creates the room and its associated building
      FactoryGirl.create :room
    else
      # Creates a building (for cases when there are no rooms)
      FactoryGirl.create :building
    end
  end

  # Visit map and wait to load map data
  before(:each) do
    visit root_path
    wait_for_ajax
  end

  context 'when there are rooms' do

    it 'should show the indoor map when click on building', js: true do

      # Get the number of layers on the map before click in a building
      layers_before = page.evaluate_script("Object.keys(map._layers).length")

      page.execute_script("buildingLayer.getLayers()[0].fire('click')")
      wait_for_ajax


      # Then get after the click
      layers_after = page.evaluate_script("Object.keys(map._layers).length")
      expect(layers_after).to be > layers_before
    end

    it 'should show the building level control when click on building', js: true do

      page.execute_script("buildingLayer.getLayers()[0].fire('click')")
      wait_for_ajax

      level_control = page.evaluate_script('$(".leaflet-bottom.leaflet-right .leaflet-bar.leaflet-control a").is(":visible")')
      expect(level_control).to eq(true)
    end

    it 'should show the rooms table in the sidebar when click on building', js: true do

      page.execute_script("buildingLayer.getLayers()[0].fire('click')")
      wait_for_ajax

      expect(page).to have_css("#sidebar table")
    end

  end

  context 'when there are no rooms' do

    it 'should not show the indoor map when click on building', js: true, no_rooms: true do

      # Get the number of layers on the map before click in a building
      layers_before = page.evaluate_script("Object.keys(map._layers).length")

      page.execute_script("buildingLayer.getLayers()[0].fire('click')")
      wait_for_ajax


      # Then get after the click
      layers_after = page.evaluate_script("Object.keys(map._layers).length")
      expect(layers_after).to be(layers_before)
    end

    it 'should not show the building level control when click on building', js: true, no_rooms: true do

      page.execute_script("buildingLayer.getLayers()[0].fire('click')")
      wait_for_ajax

      page.save_screenshot
      level_control = page.evaluate_script('$(".leaflet-bottom.leaflet-right .leaflet-bar.leaflet-control a").is(":visible")')
      expect(level_control).to eq(false)
    end

    it 'should show alert in the sidebar when click on building', js: true, no_rooms: true do

      page.execute_script("buildingLayer.getLayers()[0].fire('click')")
      wait_for_ajax

      expect(page).to have_content("Nenhuma sala disponível para este edifício.")
    end

  end

end
