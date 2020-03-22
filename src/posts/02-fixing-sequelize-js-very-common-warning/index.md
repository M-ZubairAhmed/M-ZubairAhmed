---
path: '/blog/02-fixing-sequelize-js-very-common-warning'
date: '2019-2-12'
serial: '2'
title: 'Fixing a very common warning of Sequelize.js'
cover: 'https://res.cloudinary.com/md-zubairahmed/image/upload/c_scale,g_auto,x_2010,y_0/v1562130458/farhad-fallahzad-VtQMBG_Ljc0-unsplash_zd61bu.jpg'
tags: ['squelizejs', 'javascript', 'code clean up']
excerpt: 'We had this constant squelize error showing up in our development logs stating String based operators are now deprecated. It was time to fix this.'
status: 'published'
---

We had this constant error showing up in our development logs :

> squelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:236:13

On simple google search, lead me to this huge issue on GitHub [https://github.com/sequelize/sequelize/issues/8417](https://github.com/sequelize/sequelize/issues/8417).

Conversation over there is huge, there seems to be many potentials solutions, the ones which collaborators most suggested was to disable operator aliasing. So any string based operator will be disabled without any aliases instead symbol based built in operators will be used. This prevents cross site attacks.

```javascript
const sequelize = new Sequelize(config.databaseUrl, {
  operatorsAliases: false,
})
```

[Follow here](https://github.com/sequelize/sequelize/issues/8417#issuecomment-341617577) for even in detail explanation.
