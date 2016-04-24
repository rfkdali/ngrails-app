class HomeController < ApplicationController
  def index
  end

  def conditions
    data = File.read("#{Rails.root}/public/conditions.json")
    render json: data
  end
end