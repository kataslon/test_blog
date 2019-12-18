class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :name, null: false
      t.text :text
      t.integer :kind, null: false, default: 0
      t.belongs_to :story, foreign_key: true, index: true

      t.timestamps
    end
  end
end
