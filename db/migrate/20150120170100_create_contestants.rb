class CreateContestants < ActiveRecord::Migration
  def change
    create_table :contestants do |t|
    	t.string :summonername
    	t.integer :pledge
    	t.integer :rank
      t.timestamps null: false
    end
  end
end
