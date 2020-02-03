# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
  get 'sort', to: 'sort#index'
  get 'sort-backwards', to: 'sort_backwards#index'
end
