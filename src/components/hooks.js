export const usePostDate = frontmatter => {
  const { date, updated } = frontmatter
  const postedDate = `Posted ${date}`

  if (updated) return `Updated ${updated} | ${postedDate}`

  return postedDate
}
