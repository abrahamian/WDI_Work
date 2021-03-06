require 'pry'
require 'active_record'

ActiveRecord::Base.logger = Logger.new('./sql.log')

ActiveRecord::Base.establish_connection(
  adapter: "postgresql",
  host: "localhost",
  username: "evobersi",
  password: "",
  database: "moma_db"
)

class Painting < ActiveRecord::Base
  belongs_to :artist
end

class Artist < ActiveRecord::Base
  has_many :paintings
end

binding.pry

