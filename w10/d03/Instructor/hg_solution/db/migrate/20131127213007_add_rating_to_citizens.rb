class AddRatingToCitizens < ActiveRecord::Migration
  def change
    add_column :citizens, :rating, :integer
  end
end
