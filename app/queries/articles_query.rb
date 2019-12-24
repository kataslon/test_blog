class ArticlesQuery

  def initialize(params)
    @name = params[:name]
    @text = params[:text]
    @type = params[:type]
    @sort_param = params[:sort_param]
    @group_param = params[:group_param]
    @articles = Article.all
  end

  def run
    @group_param == 'story' ? group_by_story : apply_filters
    @articles
  end

  private

  def apply_filters
    by_name
    by_text
    by_type
    sort
    group
  end

  def by_name
    return if @name.nil? || @name.empty?

    @articles = @articles.where('name like ?', "%#{@name}%")
  end

  def by_text
    return if @text.nil? || @text.empty?

    @articles = @articles.where('text like ?', "%#{@text}%")
  end

  def by_type
    return if @type.nil? || @type.empty?

    @articles = @articles.where(kind: @type)
  end

  def sort
    return if @sort_param.nil? || @sort_param.empty?

    @articles = @articles.sort_by(&@sort_param.to_sym)
  end

  def group
    return if @group_param.nil? || @group_param.empty?

    if @group_param == "type"
      @group_param = :kind
    end
    @articles = @articles.group_by(&@group_param.to_sym)
  end

  def group_by_story
    @articles = @articles.group_by { |article| article.story }
      .map do |story, scope|
        {
          story: story,
          article_count: scope.count,
          type_count: type_count(scope),
          last_article: last_for(scope)
        }
      end
  end

  def type_count(articles)
    articles.pluck(:kind).uniq.count
  end

  def last_for(articles)
    sort_param = @sort_param || 'created_at'
    articles.sort_by(&sort_param.to_sym).last
  end

end
