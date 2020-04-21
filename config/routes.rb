# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#index'
  get 'pages', to: 'pages#index'
  get 'simple-show-bulma', to: 'pages#simple_show_bulma'
  get 'sort', to: 'sort#index'
  get 'sort-backwards', to: 'sort_backwards#index'
  get 'babel-7-8', to: 'pages#babel_7_8'
end
