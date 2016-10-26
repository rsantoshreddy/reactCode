<script type="text/babel">
        var MyFirstComponent = React.createClass({
          render: function(){
            return (
                <div>
                  Hellow world! I'm From JSX...
                </div>
            )
          }
        });

        ReactDOM.render(<MyFirstComponent />, document.getElementById("content"));
       
    </script>
    <!-- <script type="text/javascript">
       var MyFirstComponent = React.createClass({displayName: 'MyFirstComponent',
        render: function() {
          return (
            React.createElement('div', {className: "MyFirstComponent"},
              "Hello, world! I'm From JavaScript"
            )
          );
        }
      });
      ReactDOM.render(
        React.createElement(MyFirstComponent, null),
        document.getElementById('content')
      );
    </script> -->
page 2:
    Using Props

Page 3:
   <!-- array.map(function(currentValue,index,arr), thisValue) -->
    <script type="text/babel">

        var Employee = React.createClass({
          render: function(){
            return (
                <h1>{this.props.data.name}</h1>
            )
          }
        });

        var EmployeeList = React.createClass({
          render: function(){
            var data=[{name:"Santosh", id: 1},{name:"Mahesh", id:2}];

            var employees= data.map(function(emp){
               return <Employee data={emp} key={emp.id}/>
            });
            
            return (<div>{employees}</div>);
          }
        });

        ReactDOM.render(<EmployeeList />, document.getElementById("content"));
       
    </script>



