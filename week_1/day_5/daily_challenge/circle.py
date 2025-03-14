import math


class Circle:
    def __init__(self, radius=1, diameter=None):
        if diameter:
            self.radius = diameter / 2
        elif radius:
            self.radius = radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def get_radius(self):
        return self.radius

    def get_diameter(self):
        return self.radius * 2

    def __repr__(self):
        return f"Circle(radius={self.radius}, diameter={self.get_diameter()})"

    def __str__(self):
        return f"Circle with radius {self.radius} and diameter {self.get_diameter()}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented


# Testing the Circle class
circle1 = Circle(radius=3)
circle2 = Circle(diameter=10)

print(f"Circle 1 radius: {circle1.get_radius()}")
print(f"Circle 2 diameter: {circle2.get_diameter()}")

print(circle1)
print(circle2)

print(f"Circle 1 area: {circle1.area():.2f}")
print(f"Circle 2 area: {circle2.area():.2f}")

circle3 = circle1 + circle2
print(circle3)

print(circle1 < circle2)
print(circle1 == circle2)

circle_list = [circle1, circle2, circle3]
circle_list.sort()
print("Sorted circles:", circle_list)
