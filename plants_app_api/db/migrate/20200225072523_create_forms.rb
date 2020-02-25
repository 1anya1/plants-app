class CreateForms < ActiveRecord::Migration[6.0]
  def change
    create_table :forms do |t|
      t.date :date
      t.string :title
      t.string :notes
      t.string :img

      t.timestamps
    end
  end
end
