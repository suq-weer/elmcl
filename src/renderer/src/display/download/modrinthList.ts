import { ApiSearchParams, fetchApiSearchResponse } from '@core/api/modrinth/getProjects'
import { DownloadBaseList } from '@renderer/display/download/baseList'

async function getModrinthProjects(
  facets: string[],
  offset: number,
  limit: number
): Promise<{ list: DownloadBaseList['list'] } | { list: [] }> {
  const params: ApiSearchParams = {
    query: '',
    facets: facets,
    index: 'relevance',
    offset: offset,
    limit: limit
  }

  try {
    const response = (await fetchApiSearchResponse(params)).hits
    const output: { list: DownloadBaseList['list'] } = { list: [] }

    for (const project of response) {
      // 过滤掉测试版本
      const filteredVersions = filterStableVersions(project.versions)
      // 排序版本号
      const sortedVersions = sortVersions(filteredVersions)
      // 格式化版本号
      const formattedVersions = formatVersionRange(sortedVersions)

      output.list.push({
        title: project.title,
        description: project.description,
        client_side: project.client_side,
        server_side: project.server_side,
        downloads: project.downloads,
        icon_url: project.icon_url,
        author: project.author,
        display_categories: project.display_categories,
        versions: formattedVersions,
        follows: project.follows,
        project_id: project.project_id
      })
    }

    return output
  } catch (error) {
    console.error('Error fetching Modrinth projects:', error)
    throw new Error('Failed to fetch Modrinth projects')
  }
}

function filterStableVersions(versions: string[]): string[] {
  return versions.filter(
    (version) => !version.includes('-pre') && !version.includes('-rc') && !version.includes('w')
  )
}

function sortVersions(versions: string[]): string[] {
  return versions.sort((a, b) => compareVersions(a, b))
}

function compareVersions(versionA: string, versionB: string): number {
  const [majorA, minorA, patchA] = parseVersion(versionA)
  const [majorB, minorB, patchB] = parseVersion(versionB)

  if (majorA !== majorB) return majorA - majorB
  if (minorA !== minorB) return minorA - minorB
  return (patchA || 0) - (patchB || 0)
}

function parseVersion(version: string): [number, number, number] {
  const parts = version.split('.').map(Number)
  return [parts[0] || 0, parts[1] || 0, parts[2] || 0]
}

function formatVersionRange(versions: string[]): string {
  return versions.length > 0 ? `${versions[0]}-${versions[versions.length - 1]}` : ''
}

export { getModrinthProjects }
