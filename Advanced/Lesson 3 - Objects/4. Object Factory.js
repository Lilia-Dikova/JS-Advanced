function factory(library, orders) {
    const result = [];
    for (let order of orders) {
        const orders = [

            {
            
            template: { name: 'ACME Printer'},
            
            parts: ['print']
            
            },
            
            {
            
            template: { name: 'Initech Scanner'},
            
            parts: ['scan']
            
            },
            
            {
            
            template: { name: 'ComTron Copier'},
            
            parts: ['scan', 'print']
            
            },
            
            {
            
            template: { name: 'BoomBox Stereo'},
            
            parts: ['play']
            
            }
            
            ];    
            const current = Object.assign({}, order.template);
    for (let part of order.parts) {
    current[part] = library[part];
    }
    result.push(current);
    }
    return result;
    }

    console.log()