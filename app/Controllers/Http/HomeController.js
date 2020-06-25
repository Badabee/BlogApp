'use strict'

const Category = use('App/Models/Category')
const Post = use('App/Models/Post')
const Database = use('Database')

class HomeController {
    async index({ view, response }) {
        response.header('Turbolinks-Location', '/')

        const posts = await Database.table('posts').limit(3)

        console.log(posts)

        return view.render('index', { posts })
    }
}

module.exports = HomeController