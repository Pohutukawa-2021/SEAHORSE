const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const path = require('path')
const fs = require('fs')

server.use(express.static('public'))// this will have the photos
server.use(express.urlencoded({ extended: false }))