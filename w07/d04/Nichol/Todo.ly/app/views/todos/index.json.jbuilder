json.array!(@todos) do |todo|
  json.extract! todo, :task, :completed
  json.url todo_url(todo, format: :json)
end
