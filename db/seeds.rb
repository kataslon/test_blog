require 'faker'

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

5.times do
  Story.create name: Faker::Lorem.sentence(word_count: 3)
end

Story.all.each do |story|
  kinds = Article.kinds.cycle
  5.times do
    name = Faker::Lorem.sentence(word_count: 3)
    text = Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4)
    kind = kinds.next.first

    Article.create story: story, name: name, text: text, kind: kind
  end
end
