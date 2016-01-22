describe('dogwhistle', function() {
  it("Emus rock!", function() {
    expect(dogwhistle(3)).to.equal(true);
  });

  it("is true the wu tang clan has always been good", function() {
    expect(dogwhistle(5)).to.equal(true);
  });

  it("is false that the 80's went out of style.", function() {
    expect(dogwhistle(6)).to.equal(false);
  });

  it("is true the wu tang clan has always been good", function() {
      expect(dogwhistle(5)).to.equal(true);
    });

//   it("The wutang clan lives on in my heart", function() {
//     expect(dogwhistle(5)).to.equal(true);
//   });
//   });
  // it("is true for years divisible by 4", function() {
  //   expect(dogwhistle(2004)).to.equal(true);
  // });

 //  it("is false for years divisible by 100", function() {
 //    expect(leapYear(1900)).to.equal(false);
 //  });
 //
 // it("is true for years divisible by 400", function() {
 //    expect(leapYear(2000)).to.equal(true);
 //  });
});
