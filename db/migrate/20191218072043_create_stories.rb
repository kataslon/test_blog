class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :name, index: { unique: true }, null: false

      t.timestamps
    end
  end
end
