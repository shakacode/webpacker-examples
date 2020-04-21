# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#index'
  get 'pages', to: 'pages#index'
  get 'simple-show-bulma', to: 'pages#simple_show_bulma'
  get 'lodash_moment_sort', to: 'pages#lodash_moment_sort'
  get 'lodash_only_sort', to: 'pages#lodash_only_sort'
  get 'babel-7-8', to: 'pages#babel_7_8'
end
