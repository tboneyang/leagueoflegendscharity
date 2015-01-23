class CreateTournaments < ActiveRecord::Migration
  def change
    create_table :tournaments do |t|
    	t.string :name
    	t.integer :donations
    	t.string :startdate
    	t.string :stage

      t.timestamps null: false
    end
  end
end
