class AdminController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'

  def index
    @buildings = Building.count
    @rooms = Room.count
    @points = Point.count
    @plans = Plan.count
    @title = "Dashboard"
  end

  private

  def authenticate_admin
    admin_signed_in?
  end
end
