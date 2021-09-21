class Iron{
	constructor(x,y)
	{
		var options = {
			restitution: 0.8, 
			friction: 3,
			density: 30
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width = 80;
        this.height = 50
		this.body=Bodies.rectangle(this.x, this.y,this.width, this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey"); 
			fill("grey");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)

			pop()
	}}