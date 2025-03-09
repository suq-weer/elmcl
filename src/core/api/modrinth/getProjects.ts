// 定义接口，描述API回复的结构
interface ApiSearchResponse {
  hits: [
    {
      slug: string
      title: string
      description: string
      project_type: string
      categories: string[]
      client_side: string
      server_side: string
      downloads: number
      icon_url: string
      color: number
      thread_id: string
      monetization_status: string
      project_id: string
      author: string
      display_categories: string[]
      versions: string[]
      follows: number
      date_created: string
      date_modified: string
      latest_version: string
      license: string
      gallery: string[]
      featured_gallery: string
    }
  ]
  offset: number
  limit: number
  total_hits: number
}

// 定义接口，描述API请求的参数
interface ApiSearchParams {
  query?: string
  facets?: string[]
  index?: 'relevance' | 'downloads' | 'follows' | 'newest' | 'updated'
  offset?: number
  limit?: number
}

// 函数接受参数、发起请求并返回对象
async function fetchApiSearchResponse(params: ApiSearchParams): Promise<ApiSearchResponse> {
  // 构造请求URL
  const url = new URL('https://api.modrinth.com/v2/search')
  const con_facets = params.facets?.map((facet) => `["${facet}"]`) || []
  url.search = new URLSearchParams({
    facets: `[${con_facets.join(',')}]`,
    index: params.index || 'relevance',
    offset: params.offset?.toString() || '0',
    limit: params.limit?.toString() || '20'
  }).toString()

  // 发起请求
  const response = await fetch(url)

  // 检查响应是否有效
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  // 解析响应数据
  // 返回符合接口结构的对象
  return await response.json()
}

// 导出函数和接口，以便在另一个TS文件中调用
export { fetchApiSearchResponse }
export type { ApiSearchParams, ApiSearchResponse }
