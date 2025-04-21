function rectangle (w,h,c) {
    let result = {
        width: Number (w),
        height: Number (h),
        color: c[0].toUpperCase() + c.substring(1),
        calcArea() {
            return (this.width * this.height)
        }
        }
        return result;
    }

    let rect = rectangle(4, 5, 'red');

    console.log(rect.width);
    
    console.log(rect.height);
    
    console.log(rect.color);
    
    console.log(rect.calcArea());