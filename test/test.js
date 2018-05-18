describe(' Display registration number plate',function(){
  it("It shouldn't save any registration to the map that doesn't start with CA,CJ,CL or CAW",function(){
    let mainReg = regNumbers(); // INSTANCE
    mainReg.storeRegNum("CG 123-456");
    assert.deepEqual(mainReg.returnMap(),{});
  })
  it('It should save registration number to the map',function(){
    let mainReg = regNumbers(); // INSTANCE
    mainReg.storeRegNum("CA 123-456");
    mainReg.storeRegNum("CL 123-456");
    assert.deepEqual(mainReg.returnMap(),{"CA 123-456":0,"CL 123-456":0});
  })
  it('It should filter only registrations from George',function(){
    let mainReg = regNumbers(); // INSTANCE
    mainReg.storeRegNum("CA 123-456");
    mainReg.storeRegNum("CL 123-456");
    mainReg.storeRegNum("CJ 123-456");
    mainReg.storeRegNum("CAW 123-456");
  let map =  mainReg.returnMap();
  assert.deepEqual(mainReg.filterReg(map,"CAW"),["CAW 123-456"]);
  })
  it('It should filter only registrations from Paarl',function(){
    let mainReg = regNumbers(); // INSTANCE
    mainReg.storeRegNum("CA 123-456");
    mainReg.storeRegNum("CL 123-456");
    mainReg.storeRegNum("CJ 123-456");
    mainReg.storeRegNum("CAW 123-456");
  let map =  mainReg.returnMap();
  assert.deepEqual(mainReg.filterReg(map,"CJ"),["CJ 123-456"]);
  })
  it('It should filter only registrations from Stellenbosch',function(){
    let mainReg = regNumbers(); // INSTANCE
    mainReg.storeRegNum("CA 123-456");
    mainReg.storeRegNum("CL 123-456");
    mainReg.storeRegNum("CJ 123-456");
    mainReg.storeRegNum("CAW 123-456");
  let map =  mainReg.returnMap();
  assert.deepEqual(mainReg.filterReg(map,"CL"),["CL 123-456"]);
  })
  it('It should filter only registrations from Cape Town',function(){
    let mainReg = regNumbers(); // INSTANCE
    mainReg.storeRegNum("CA 123-456");
    mainReg.storeRegNum("CL 123-456");
    mainReg.storeRegNum("CJ 123-456");
    mainReg.storeRegNum("CAW 123-456");
  let map =  mainReg.returnMap();
  assert.deepEqual(mainReg.filterReg(map,"CA "),["CA 123-456"]);
  })
  it('It should return all registrations entred when All selected',function(){
    let mainReg = regNumbers(); // INSTANCE
    mainReg.storeRegNum("CA 123-456");
    mainReg.storeRegNum("CL 123-456");
    mainReg.storeRegNum("CJ 123-456");
    mainReg.storeRegNum("CAW 123-456");
  let map =  mainReg.returnMap(); // map
  assert.deepEqual(mainReg.filterReg(map,"All"),["CA 123-456","CL 123-456","CJ 123-456","CAW 123-456"]);
  })


})
