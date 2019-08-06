$(() => {
  const addTeam = () => {
    const $baseballContainer = $('.baseballContainer')
    const $footballContainer = $('.footballContainer')
    const $footballTeam = $('.footballTeam')
    const $baseballTeam = $('.baseballTeam')
    $baseballContainer.append($baseballTeam)
    $footballContainer.append($footballTeam)
  }

addTeam();

$('button').on('click', () => {
  const $row = $('<div>')
  $row.addClass('newPlayers')
  $row.css("display", "flex")
  $row.css("flex-direction", "row")
  const $input1 = $('<input>')
  $input1.attr("type", "text")
  $input1.attr("name", "players")
  $input1.css("margin-right", "4px")
  $input1.addClass('player-info')
  const $input2 = $('<input>')
  $input2.attr("type", "text")
  $input2.attr("name", "players")
  $input2.css("margin-right", "6px")
  $input2.addClass('player-info')
  const $input3 = $('<input>')
  $input3.attr("type", "text")
  $input3.attr("name", "players")
  $input3.addClass('player-info')
  $row.append($input1)
  $row.append($input2)
  $row.append($input3)
  $('#players').append($row)
})

let clicked = false

$('.dropdown-toggle').on('click', () => {
  if (clicked === false) {
    $('.dropdown-menu').css("display", "block")
    clicked = true
  } else {
    $('.dropdown-menu').css("display", "none")
    clicked = false
  }
})

})
