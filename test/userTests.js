const { expect } = require('chai')
const user = require('../user')

describe('Async function test', function () {
    it('Should return the correct user data for a valid user ID', async function () {
        const userData = await user.fetchUserData(1)
        expect(userData).to.be.an('object')
        expect(userData.id).to.equal(1)
        expect(userData).to.have.property('name')
        expect(userData.name).to.equal('Leanne Graham')
        expect(userData).to.have.property('email')
        expect(userData.email).to.equal('Sincere@april.biz')
    })

    // Chain together multiple assertions

    it('Should return user data for a valid user ID', async function () {
        const userData = await user.fetchUserData(1)
        expect(userData).to.be.an('object')
            .that.has.property('id')
            .that.is.a('number')
            .that.equals(1)
    })

    it('Should return an object with a non-empty company property', async function () {
        const userData = await user.fetchUserData(1)
        expect(userData.company).to.be.an('object');
        expect(userData.company).to.not.be.empty;
    });

    it('Should return an object with a valid address property', async function () {
        const userData = await user.fetchUserData(1)
        expect(userData.address).to.be.an('object');
        expect(userData.address).to.have.property('street');
        expect(userData.address).to.have.property('suite');
        expect(userData.address).to.have.property('city');
        expect(userData.address).to.have.property('zipcode');
        expect(userData.address).to.have.property('geo');
        expect(userData.address.geo).to.have.property('lat');
        expect(userData.address.geo).to.have.property('lng');
    });

    it('Should throw an error for an invalid user ID', async function () {
        try {
            await user.fetchUserData(999)
        } catch (err) {
            expect(err).to.exist
            expect(err.message).to.equal('Not Found')
        }
    })
})
