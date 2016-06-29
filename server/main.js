import _ from 'lodash'
import { Meteor } from 'meteor/meteor'
import { Employees } from '../imports/collections/employees'
import { image, helpers } from 'faker'

Meteor.startup(() => {
  // Generate some fake data


  const numberRecords = Employees.find({}).count()
  if(!numberRecords) {
    // generate some data
    _.times(5000, () => {
      // this function is called 5000 times
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone, 
        avatar: image.avatar()
      })
    })
  }

  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page })
  })
})
