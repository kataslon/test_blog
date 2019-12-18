describe ArticlesQuery do
  let(:story_1) { create :story }
  let(:story_2) { create :story }

  let!(:article_1) { create :article, story: story_1, name: 'aaa1', text: 'ddd second ddd', kind: :tweet }
  let!(:article_2) { create :article, story: story_1, name: 'bbb2', text: 'ccc first ccc', kind: :facebook_post }
  let!(:article_3) { create :article, story: story_2, name: 'bbb1', text: 'aaa second aaa' }
  let!(:article_4) { create :article, story: story_2, name: 'aaa2', text: 'bbb first bbb', kind: :tweet }

  context '#run' do
    let(:result) { described_class.new(params).run }

    describe 'empty params' do
      let(:params) { {} }

      it 'returns all transactions' do
        expect(result).to match_array(Article.all)
      end
    end

    describe 'filter by name' do
      let(:params) { { name: 'aaa' } }

      it 'returns all transactions' do
        expect(result).to match_array([article_1, article_4])
      end
    end

    describe 'filter by text' do
      let(:params) { { text: 'first' } }

      it 'returns all transactions' do
        expect(result).to match_array([article_2, article_4])
      end
    end

    describe 'filter by type' do
      let(:params) { { type: 'tweet' } }

      it 'returns all transactions' do
        expect(result).to match_array([article_1, article_4])
      end
    end

    describe 'sort by name' do
      let(:params) { { sort_param: 'name' } }

      it 'returns all transactions' do
        expect(result.pluck(:id)).to match_array([article_1.id, article_4.id, article_3.id, article_2.id])
      end
    end

    describe 'sort by text' do
      let(:params) { { sort_param: 'text' } }

      it 'returns all transactions' do
        expect(result.pluck(:id)).to match_array([article_3.id, article_2.id, article_1.id, article_4.id])
      end
    end

    describe 'group by type' do
      let(:params) { { group_param: 'type' } }

      it 'returns all transactions' do
        expect(result).to eq ({
          'tweet' => [article_1, article_4],
          'blog_post' => [article_3],
          'facebook_post' => [article_2]
        })
      end
    end

    describe 'group by story whith sorting by name' do
      let(:params) { { sort_param: 'name', group_param: 'story' } }

      it 'returns all transactions' do
        expect(result).to eq ([
          {
            story: story_1,
            article_count: 2,
            type_count: 2,
            last_article: article_2
          },
          {
            story: story_2,
            article_count: 2,
            type_count: 2,
            last_article: article_3
          }
        ])
      end
    end
  end
end

