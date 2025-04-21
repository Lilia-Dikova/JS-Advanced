import {planYourTrip} from './planYourTrip.js'
import { assert} from 'chai'

describe ('Plan your Trip', () => {
    describe('Choosting Destination', () => {
        it ('Checks year', () => {
            assert.throw(() => planYourTrip.choosingDestination('Ski resort', 'Winter', 2023), Error, 'Invalid Year!');
            assert.throw(() => planYourTrip.choosingDestination('Ski resort', 'Winter', 1), Error, 'Invalid Year!');
            assert.throw(() => planYourTrip.choosingDestination('Ski resort', 'Winter', -1), Error, 'Invalid Year!');
            assert.throw(() => planYourTrip.choosingDestination('Ski resort', 'Winter', 1,1), Error, 'Invalid Year!');
            assert.throw(() => planYourTrip.choosingDestination('Ski resort', 'Winter', ), Error, 'Invalid Year!');



        });
        it ('Different Destination' , () => {
            assert.throw(() => planYourTrip.choosingDestination('test', 'Summer', 2024), Error, 'This destination is not what you are looking for.');
            assert.throw(() => planYourTrip.choosingDestination('Me', 'Spring', 2024), Error, 'This destination is not what you are looking for.');
            assert.throw(() => planYourTrip.choosingDestination(1, 'Winter', 2024), Error, 'This destination is not what you are looking for.');
            assert.throw(() => planYourTrip.choosingDestination(1, 'Autumn', 2024), Error, 'This destination is not what you are looking for.');



        })
        it ('Works correctly' , () =>{
            let season = 'Winter';
            let destination = 'Ski Resort'
            assert.equal(planYourTrip.choosingDestination(destination , season, 2024),`Great choice! The ${season} is the perfect time to visit the ${destination}.` )
            
        });
        it ('Works correctly with other season' , () =>{
            let season = 'Summer';
            let destination = 'Ski Resort'
            assert.equal(planYourTrip.choosingDestination(destination , season, 2024),`Consider visiting during the Winter for the best experience at the ${destination}.` )
            assert.equal(planYourTrip.choosingDestination(destination , 'Autumn', 2024),`Consider visiting during the Winter for the best experience at the ${destination}.` )
            assert.equal(planYourTrip.choosingDestination(destination , 'Spring', 2024),`Consider visiting during the Winter for the best experience at the ${destination}.` )
            assert.equal(planYourTrip.choosingDestination(destination , '', 2024),`Consider visiting during the Winter for the best experience at the ${destination}.` )

        });
        
    })
    describe ('Explore Options' , () => {
        it('Removes activity', () => {
            let activities = ["Skiing", "Snowboarding", "Winter Hiking"]
            let activityIndex = 0;
            let result = [];
            for (let i = 0; i < activities.length; i++) {
                if (i !== activityIndex) {
                  result.push(activities[i]);
                }
              }
            assert.equal(planYourTrip.exploreOptions(activities,activityIndex),`${result.join(', ')}`)
            assert.equal(planYourTrip.exploreOptions(activities,1),'Skiing, Winter Hiking')

        })
        let activities = ["Skiing", "Snowboarding", "Winter Hiking"]
        it ('Validates input', () => {
            assert.throw(() =>planYourTrip.exploreOptions('test',1), Error, 'Invalid Information!');
            assert.throw(() =>planYourTrip.exploreOptions(activities,-3), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions(activities,8), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions(activities,), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions(activities,5.333), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions('',1), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions('test',-1), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions(activities,[]), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions(), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions([1,1],null), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions(Number,1), Error, 'Invalid Information!')
            assert.throw(() =>planYourTrip.exploreOptions(Number,Number), Error, 'Invalid Information!')

        })
    })
    describe('Estimate Expenses', () => {
        it('Calculates Budget friendly cost', () => {
            let distance = 100.00;
            let fuelCost = 2.00;
            let totalCost = (distance * fuelCost).toFixed(2);

            assert.equal(planYourTrip.estimateExpenses(distance,fuelCost),`The trip is budget-friendly, estimated cost is $${totalCost}.`)
            assert.equal(planYourTrip.estimateExpenses(250,2,5),`The trip is budget-friendly, estimated cost is $500.00.`)
            assert.equal(planYourTrip.estimateExpenses(22.1,4),`The trip is budget-friendly, estimated cost is $88.40.`)
            

        });
        it('Calculates Budget friendly cost', () => {
            let distance = 0.001;
            let fuelCost = 2.00;
            let totalCost = (distance * fuelCost).toFixed(2);

            assert.equal(planYourTrip.estimateExpenses(distance,fuelCost),`The trip is budget-friendly, estimated cost is $${totalCost}.`)
    
        });
        it('Calculates cost', () => {
            let distance = 400;
            let fuelCost = 2;
            let totalCost = (distance * fuelCost).toFixed(2);

            assert.equal(planYourTrip.estimateExpenses(distance,fuelCost),`The estimated cost for the trip is $${totalCost}, plan accordingly.`);
            assert.equal(planYourTrip.estimateExpenses(1222.2,1.5),`The estimated cost for the trip is $1833.30, plan accordingly.`)
            assert.equal(planYourTrip.estimateExpenses(250,2.0005),`The estimated cost for the trip is $${500.13}, plan accordingly.`)

        });
        it('Calculates cost', () => {
            let distance = 400.111111;
            let fuelCost = 2.11;
            let totalCost = (distance * fuelCost).toFixed(2);

            assert.equal(planYourTrip.estimateExpenses(distance,fuelCost),`The estimated cost for the trip is $${totalCost}, plan accordingly.`);
            
        });
        it ('Validates input' , ()=> {
            assert.throw(()=> planYourTrip.estimateExpenses('1',1), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(1,'1'), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(-1,1), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(1,-1), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(0,1.222), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(1,0), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses('22',-22), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses('test','test'), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(0,0), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(-1,-1), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses([1],-1), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(-1,[]), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(2,null), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(Number,2), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(null,2), Error,'Invalid Information!' )
            assert.throw(()=> planYourTrip.estimateExpenses(2,Number), Error,'Invalid Information!' )

        })
    })
})

