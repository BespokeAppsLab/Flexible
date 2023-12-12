import { g, config, auth } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 3, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ max: 1000 }).optional(),
  githubUrl: g.url().optional(),
  LinkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
})

const Project = g.model('Project', {
  name: g.string().length({ min: 3, max: 20}),
  description: g.string().length({ max: 1000 }),
  liveSiteUrl: g.url().optional(),
  gitHubUrl: g.url().optional(),
  catergory: g.string().search(),
  users: g.relation(() => User),
})  

export default config({
  schema: g
})
  