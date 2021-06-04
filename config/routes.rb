Rails.application.routes.draw do
  root 'pages#home'
  get '/*path' => 'pages#home' # Catches all route that will direct any other request
end
