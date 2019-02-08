const Sequelize = require('sequelize')

// create database
// const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:4567/scribblr_db', {
//       dialect: 'postgres'
//     });
const db = new Sequelize({
    database: "scribblr_db",
    dialect: "postgres"
  })

// create tables
const User = db.define('users', {
    user_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING // May change
    }
})

const Work = db.define('works', {
    type: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})

const Comment = db.define('comments', {
    content: {
        type: Sequelize.TEXT
    }
})

// set relationships
Work.hasMany(Comment, {onDelete: 'cascade'} )
Comment.belongsTo(Work)

User.hasMany(Work, {onDelete: 'cascade'} )
Work.belongsTo(User)

User.hasMany(Comment, {onDelete: 'cascade'} )
Comment.belongsTo(User)

module.exports = {
    db,
    Work,
    User,
    Comment
}