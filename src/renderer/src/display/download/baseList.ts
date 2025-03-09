export interface DownloadBaseItem {
  title: string
  description: string
  client_side: string
  server_side: string
  downloads: number
  icon_url: string
  author: string
  display_categories: string[]
  versions: string
  follows: number
  project_id: string
}

export interface DownloadBaseList {
  list: DownloadBaseItem[]
}
