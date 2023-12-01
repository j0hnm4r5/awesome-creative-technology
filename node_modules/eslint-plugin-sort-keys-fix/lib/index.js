/**
 * @fileoverview Fork of eslint rule that sorts keys in objects (https://eslint.org/docs/rules/sort-keys) with autofix enabled
 * @author Leonid Buneev
 */
'use strict'
const path = require('path')
// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const requireIndex = require('requireindex')

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(path.join(__dirname, 'rules'))
