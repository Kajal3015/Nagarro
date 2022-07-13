var twoSum = function(nums, target) {
    const tempObj = {};
    for (let a = 0; a < nums.length; a++) {
        const remaingValOfCurrent = target - nums[a];

        if (remaingValOfCurrent in tempObj) {
            return [tempObj[remaingValOfCurrent], a];
        }
        tempObj[nums[a]] = a;
    }

    return [];
};
