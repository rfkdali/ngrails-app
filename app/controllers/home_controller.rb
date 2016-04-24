class HomeController < ApplicationController
  def index
  end

  def conditions
    data = File.read("#{Rails.root}/public/conditions.json").gsub!(/(['"])?([a-zA-Z0-9_]+)(['"])?:/, '"\2":')
    render json: data
  end
end