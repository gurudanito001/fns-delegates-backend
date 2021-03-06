const Delegate = require("../models/Delegate");

function DelegateService() {
  return {
    add: data => new Delegate(data).save(),
    delete: id => Delegate.findByIdAndDelete(id),
    findFirstname: firstname => Delegate.find({"firstname":
      { $regex: new RegExp("^" + firstname.toLowerCase(), "i") } }),

    findLastname: lastname => Delegate.find({"lastname":
      { $regex: new RegExp("^" + lastname.toLowerCase(), "i") } }),

    findEmail: email => Delegate.find({"email":
      { $regex: new RegExp("^" + email.toLowerCase(), "i") } }),

    findCompanyName: companyName => Delegate.find({"companyName":
      { $regex: new RegExp("^" + companyName.toLowerCase(), "i") } }),

    getVip: () => Delegate.find({ vip: true }),

    getAdmitted: () => Delegate.find({ admitted: true }),

    makeVip: id => Delegate.findByIdAndUpdate(
      { _id: id },
      { vip: true },
      function(err, result) {
        if (err) {
          return err
        } else {
          return result
        }
      }
    ),

    admit:  id => Delegate.findByIdAndUpdate(
      { _id: id },
      { admitted: true },
      function(err, result) {
        if (err) {
          return err
        } else {
          return result
        }
      }
    ),

    makeDelegate: id => Delegate.findByIdAndUpdate(
      { _id: id },
      { vip: false },
      function(err, result) {
        if (err) {
          return err
        } else {
          return result
        }
      }
    ),

    exclude:  id => Delegate.findByIdAndUpdate(
      { _id: id },
      { admitted: false },
      function(err, result) {
        if (err) {
          return err
        } else {
          return result
        }
      }
    ),

    findAdmittedFirstname: firstname => Delegate.find({"firstname":
      { $regex: new RegExp("^" + firstname.toLowerCase(), "i") }, admitted: true }),

    findAdmittedLastname: lastname => Delegate.find({"lastname":
      { $regex: new RegExp("^" + lastname.toLowerCase(), "i") }, admitted: true }),
    

    findGuestFirstname: firstname => Delegate.find({"firstname":
      { $regex: new RegExp("^" + firstname.toLowerCase(), "i") }, vip: true }),

    findGuestLastname: lastname => Delegate.find({"lastname":
      { $regex: new RegExp("^" + lastname.toLowerCase(), "i") }, vip: true }),
    

  };
}

module.exports = DelegateService();