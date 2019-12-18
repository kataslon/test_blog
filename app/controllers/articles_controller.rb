class ArticlesController < ApplicationController
  def index
    @articles = ArticlesQuery.new(filter_params).run
    render component: 'ArticlesContainer', props: { articles: @articles }, prerender: false
  end

  private

  def filter_params
    params.permit(:name, :text, :type, :sort_param, :group_param)
  end
end
