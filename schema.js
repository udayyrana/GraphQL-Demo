export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review{
        id:ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
        game_id: ID!
    }
    type Author{
        id: ID!
        name:String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query{  #entry points for the graph
        reviews: [Review]
        #to fetch only one review of specif id
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation{
        addGame(game: AddGameInput): Game
        updateGame(id:ID!, edits: EditGameInput): Game
        deleteGame(id: ID!): [Game]
    }
    input AddGameInput{
        title: String!
        platform: [String!]!
    }
    input EditGameInput{
        title: String
        platform: [String!]
    }
`;
