# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
  get 'pages', to: 'pages#index'
  get 'simple_html', to: 'pages#simple_html'
end
