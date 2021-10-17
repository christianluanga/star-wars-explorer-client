import gql from "graphql-tag"

export const getAllPeople = gql`
 query ($page: Int) {
  people: GetAllPeople(page: $page) {
    next
    previous
    count
    results {
      name
      height
      mass
      gender
      homeworld
    }
    error {
      message
      status
    }
  }
}
`
export const getPersonByName = gql`
  query ($name: String!) {
  person: GetPersonByName(name: $name) {
    results {
      name
      mass
      height
      gender
      homeworld
    }
    birth_year
    films {
      title
      release_date
      director
      opening_crawl
      episode_id
    }
  }
}
`