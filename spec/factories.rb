FactoryBot.define do
  factory :story do
    name { Faker::Lorem.sentence(word_count: 3) }
  end

  factory :article do
    name { Faker::Lorem.sentence(word_count: 3) }
    text { Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4) }
    kind { :blog_post }
  end
end
