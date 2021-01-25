publish("table1").query("SELECT 1 AS test");


declare({

  schema: "rawdata",

  name: "input1"

});


assert("assertion1").query("SELECT * FROM source_table WHERE value IS NULL");


operate("operation1").queries("INSERT INTO some_table (test) VALUES (2)");


// test("test1")

//   .dataset("some_table")

//   .input("input_data", "SELECT 1 AS test")

//   .expect("SELECT 1 AS test");