/**
 * Created by mario on 19/03/17.
 */

var layouts = [
  <% layout.forEach(function(l) { %>'<%=l%>', <% }); %>
];

module.exports.layouts = layouts;
