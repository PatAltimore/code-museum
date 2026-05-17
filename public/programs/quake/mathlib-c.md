---
title: "mathlib.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/mathlib.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/mathlib.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "mathlib-c"
order: 6
description: "Mathematical backbone of Quake's groundbreaking 3D engine"

summary:
  - point: "Efficient vector math routines for real-time 3D calculations"
    link: "https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics)"
    link_label: "Vector mathematics"
  - point: "Optimized algorithms for hardware constraints of 1996"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"
  - point: "Use of trigonometry and matrix operations for 3D transformations"
    link: "https://en.wikipedia.org/wiki/Rotation_matrix"
    link_label: "Rotation matrices"
  - point: "Introduction of modular mathematical primitives for game physics"
    link: "https://en.wikipedia.org/wiki/Game_physics"
    link_label: "Game physics"
  - point: "Legacy of open-source code influencing modern game development"
    link: "https://en.wikipedia.org/wiki/GNU_General_Public_License"
    link_label: "GNU GPL"

enhancements:
  - id: "deg-to-rad-conversion"
    line_start: 32
    line_end: 32
    title: "Degrees to Radians: Bridging Human and Machine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Radian"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Circle_radians.gif/330px-Circle_radians.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "The radian and its relation to the circle. (Public domain)"
    content: "The macro `DEG2RAD` converts degrees into radians, a fundamental operation in computer graphics. Degrees are intuitive for humans, but radians are required for trigonometric functions in programming. In 1996, this conversion was critical for Quake's 3D engine, where every rotation and angle calculation relied on precise trigonometry. John Carmack and his team were working on hardware constrained by limited floating-point precision, making efficient and accurate mathematical operations essential. This simple macro encapsulates a vital transformation, enabling seamless integration of human-readable angles into the machine's mathematical world. Today, such conversions remain ubiquitous in graphics programming, a testament to the enduring relevance of this approach."
  - id: "project-point-on-plane"
    line_start: 34
    line_end: 51
    title: "Projecting Points: Flattening Dimensions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Projection_(linear_algebra)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Orthogonal_projection.svg/330px-Orthogonal_projection.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Orthogonal projection on the line m. Created by Jitse Niesen using XFig. (Public domain)"
    content: "The `ProjectPointOnPlane` function calculates the projection of a 3D point onto a plane defined by a normal vector. This operation is essential for collision detection, physics calculations, and rendering in Quake's 3D world. In the mid-90s, real-time 3D graphics were still in their infancy, and every calculation had to be optimized for performance on processors like the Intel 486. By normalizing the plane's normal vector and using dot products, this routine ensures precision while minimizing computational overhead. The approach reflects the team's deep understanding of linear algebra and their ability to translate mathematical theory into efficient code. This function laid the groundwork for countless applications in modern 3D engines, where projections are used for everything from shadow mapping to physics simulations."
  - id: "perpendicular-vector-calculation"
    line_start: 56
    line_end: 85
    title: "Finding Perpendicular Vectors in 3D Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Orthogonality"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Orthogonal_decomposition_unit_vector_2.svg/330px-Orthogonal_decomposition_unit_vector_2.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Orthogonal decomposition unit vector 2 (CC0)"
    content: "The `PerpendicularVector` function computes a vector perpendicular to a given normalized vector in 3D space. This operation is crucial for creating coordinate systems around arbitrary axes, enabling the rotation and positioning of objects in Quake's 3D environment. In 1996, when this code was written, such calculations were groundbreaking for real-time applications, as they allowed dynamic transformations without precomputed data. The algorithm cleverly identifies the smallest component of the input vector to construct an initial candidate perpendicular vector, which is then projected onto the plane orthogonal to the input vector. This method ensures numerical stability and efficiency, critical for the hardware of the era. The function's influence persists in modern graphics engines, where orthogonal vectors are a staple of 3D transformations."
  - id: "rotate-point-around-vector"
    line_start: 93
    line_end: 146
    title: "Rotating Points: Building Dynamic Worlds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotation_matrix"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Non-commutative_rotation_of_dice.png/330px-Non-commutative_rotation_of_dice.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Non-commutative rotation of dice (CC0)"
    content: "The `RotatePointAroundVector` function performs a rotation of a point around an arbitrary axis in 3D space. This operation is foundational for creating dynamic and immersive environments, allowing objects to move and rotate fluidly in Quake's world. The function constructs a rotation matrix using trigonometric functions and matrix multiplication, then applies it to the input point. In 1996, such calculations were computationally expensive, but the team at id Software optimized them for the hardware of the time. The use of perpendicular vectors and matrix concatenation highlights their mastery of linear algebra and real-time graphics programming. This function is a precursor to modern techniques used in animation and physics engines, showcasing the lasting impact of Quake's codebase."
  - id: "anglemod-function"
    line_start: 154
    line_end: 163
    title: "Angle Wrapping: Keeping Rotations in Check"
    wikipedia_url: "https://en.wikipedia.org/wiki/Modulo_operation"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Fighter_hitbox.svg/330px-Fighter_hitbox.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Fighter hitbox (CC BY 3.0)"
    content: "The `anglemod` function ensures that angles remain within a valid range by wrapping them into a 0-360 degree interval using a modulo operation. This is a common problem in computer graphics, where angles can accumulate beyond their intended range during calculations. The function uses a clever bitwise operation to achieve this efficiently, reflecting the team's focus on performance optimization. In the mid-90s, such techniques were vital for maintaining stability in real-time applications on limited hardware. The function's design is a testament to the team's ingenuity and understanding of low-level programming. Angle wrapping remains a standard practice in modern graphics engines, underscoring the enduring relevance of this approach."
  - id: "box-on-plane-side"
    line_start: 187
    line_end: 285
    title: "Collision Detection: Navigating 3D Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Eulerangles.svg/330px-Eulerangles.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Euler angles (CC BY 3.0)"
    content: "The `BoxOnPlaneSide` function determines the relationship between a bounding box and a plane, returning whether the box is on one side, the other, or intersects the plane. This is a critical operation for collision detection and spatial partitioning in Quake's 3D world. The function uses the plane's normal vector and sign bits to optimize calculations, reducing the computational cost of determining the box's position relative to the plane. In 1996, such optimizations were necessary to achieve real-time performance on hardware like the Intel 486. The function reflects the team's deep understanding of geometry and their ability to translate it into efficient code. This approach has influenced modern game engines, where collision detection remains a cornerstone of 3D graphics and physics."
  - id: "angle-vectors"
    line_start: 290
    line_end: 314
    title: "Angle to Vector: Navigating 3D Orientations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Euler_angles"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vector_add_scale.svg/330px-Vector_add_scale.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Vector addition and scalar multiplication illustration. (CC BY-SA 3.0)"
    content: "The `AngleVectors` function converts Euler angles into forward, right, and up vectors, defining a 3D orientation. This operation is essential for camera movement, object positioning, and physics calculations in Quake's 3D world. The function uses trigonometric functions to compute the vectors, reflecting the team's expertise in mathematics and graphics programming. In 1996, such calculations were groundbreaking for real-time applications, enabling dynamic and immersive environments. The function's design highlights the team's focus on precision and efficiency, ensuring stability on limited hardware. Euler angles remain a standard representation of 3D orientations, and this function's approach has influenced countless graphics engines."
  - id: "vector-operations"
    line_start: 335
    line_end: 414
    title: "Basic Vector Operations: Building Blocks of 3D"
    wikipedia_url: "https://en.wikipedia.org/wiki/Vector_space"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Greatest_common_divisor_chart.svg/330px-Greatest_common_divisor_chart.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Greatest common divisor of numbers 0-10. Line labels = first number. X axis = second number. Y axis = GCD. (CC0)"
    content: "This section defines fundamental vector operations, including addition, subtraction, scaling, normalization, and cross products. These operations are the building blocks of 3D graphics and physics, enabling calculations for movement, collision detection, and rendering in Quake's engine. The simplicity and efficiency of these functions reflect the team's focus on performance optimization, a necessity for real-time applications on hardware like the Intel 486. These operations are ubiquitous in modern graphics programming, highlighting the lasting impact of Quake's codebase. The team's implementation demonstrates their mastery of mathematics and their ability to translate it into practical solutions for game development."
  - id: "floor-div-mod"
    line_start: 498
    line_end: 537
    title: "Floor-Based Division: Precision in Integer Math"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "The `FloorDivMod` function calculates the quotient and remainder of a division operation using floor-based arithmetic. This ensures mathematically correct results for integer inputs, a critical requirement for collision detection and physics calculations in Quake's engine. The function reflects the team's attention to precision and stability, addressing edge cases like negative numerators and denominators. In 1996, such considerations were vital for maintaining consistency in real-time applications on limited hardware. The function's design highlights the team's expertise in numerical methods and their commitment to robust programming practices. Floor-based division remains a standard approach in modern programming, underscoring the enduring relevance of this technique."
  - id: "greatest-common-divisor"
    line_start: 545
    line_end: 558
    title: "Greatest Common Divisor: Optimizing Integer Calculations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
    image_url: ""
    image_caption: ""
    content: "The `GreatestCommonDivisor` function calculates the greatest common divisor (GCD) of two integers using a recursive implementation of Euclid's algorithm. This operation is fundamental in number theory and has applications in optimizing integer calculations, such as reducing fractions or finding common denominators. In the context of Quake, efficient integer math was crucial for performance on hardware like the Intel 486. The function's design reflects the team's understanding of mathematical algorithms and their ability to implement them in a practical and efficient manner. Euclid's algorithm remains a standard approach for calculating GCDs, highlighting the timelessness of this technique."

---

/*
Copyright (C) 1996-1997 Id Software, Inc.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  

See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

*/
// mathlib.c -- math primitives

#include <math.h>
#include "quakedef.h"

void Sys_Error (char *error, ...);

vec3_t vec3_origin = {0,0,0};
int nanmask = 255<<23;

/*-----------------------------------------------------------------*/

#define DEG2RAD( a ) ( a * M_PI ) / 180.0F

void ProjectPointOnPlane( vec3_t dst, const vec3_t p, const vec3_t normal )
{
	float d;
	vec3_t n;
	float inv_denom;

	inv_denom = 1.0F / DotProduct( normal, normal );

	d = DotProduct( normal, p ) * inv_denom;

	n[0] = normal[0] * inv_denom;
	n[1] = normal[1] * inv_denom;
	n[2] = normal[2] * inv_denom;

	dst[0] = p[0] - d * n[0];
	dst[1] = p[1] - d * n[1];
	dst[2] = p[2] - d * n[2];
}

/*
** assumes "src" is normalized
*/
void PerpendicularVector( vec3_t dst, const vec3_t src )
{
	int	pos;
	int i;
	float minelem = 1.0F;
	vec3_t tempvec;

	/*
	** find the smallest magnitude axially aligned vector
	*/
	for ( pos = 0, i = 0; i < 3; i++ )
	{
		if ( fabs( src[i] ) < minelem )
		{
			pos = i;
			minelem = fabs( src[i] );
		}
	}
	tempvec[0] = tempvec[1] = tempvec[2] = 0.0F;
	tempvec[pos] = 1.0F;

	/*
	** project the point onto the plane defined by src
	*/
	ProjectPointOnPlane( dst, tempvec, src );

	/*
	** normalize the result
	*/
	VectorNormalize( dst );
}

#ifdef _WIN32
#pragma optimize( "", off )
#endif


void RotatePointAroundVector( vec3_t dst, const vec3_t dir, const vec3_t point, float degrees )
{
	float	m[3][3];
	float	im[3][3];
	float	zrot[3][3];
	float	tmpmat[3][3];
	float	rot[3][3];
	int	i;
	vec3_t vr, vup, vf;

	vf[0] = dir[0];
	vf[1] = dir[1];
	vf[2] = dir[2];

	PerpendicularVector( vr, dir );
	CrossProduct( vr, vf, vup );

	m[0][0] = vr[0];
	m[1][0] = vr[1];
	m[2][0] = vr[2];

	m[0][1] = vup[0];
	m[1][1] = vup[1];
	m[2][1] = vup[2];

	m[0][2] = vf[0];
	m[1][2] = vf[1];
	m[2][2] = vf[2];

	memcpy( im, m, sizeof( im ) );

	im[0][1] = m[1][0];
	im[0][2] = m[2][0];
	im[1][0] = m[0][1];
	im[1][2] = m[2][1];
	im[2][0] = m[0][2];
	im[2][1] = m[1][2];

	memset( zrot, 0, sizeof( zrot ) );
	zrot[0][0] = zrot[1][1] = zrot[2][2] = 1.0F;

	zrot[0][0] = cos( DEG2RAD( degrees ) );
	zrot[0][1] = sin( DEG2RAD( degrees ) );
	zrot[1][0] = -sin( DEG2RAD( degrees ) );
	zrot[1][1] = cos( DEG2RAD( degrees ) );

	R_ConcatRotations( m, zrot, tmpmat );
	R_ConcatRotations( tmpmat, im, rot );

	for ( i = 0; i < 3; i++ )
	{
		dst[i] = rot[i][0] * point[0] + rot[i][1] * point[1] + rot[i][2] * point[2];
	}
}

#ifdef _WIN32
#pragma optimize( "", on )
#endif

/*-----------------------------------------------------------------*/

float	anglemod(float a)
{
#if 0
	if (a >= 0)
		a -= 360*(int)(a/360);
	else
		a += 360*( 1 + (int)(-a/360) );
#endif
	a = (360.0/65536) * ((int)(a*(65536/360.0)) & 65535);
	return a;
}

/*
==================
BOPS_Error

Split out like this for ASM to call.
==================
*/
void BOPS_Error (void)
{
	Sys_Error ("BoxOnPlaneSide:  Bad signbits");
}

#if !id386

/*
==================
BoxOnPlaneSide

Returns 1, 2, or 1 + 2
==================
*/
int BoxOnPlaneSide (vec3_t emins, vec3_t emaxs, mplane_t *p)
{
	float	dist1, dist2;
	int		sides;

#if 0	// this is done by the BOX_ON_PLANE_SIDE macro before calling this
		// function
// fast axial cases
	if (p->type < 3)
	{
		if (p->dist <= emins[p->type])
			return 1;
		if (p->dist >= emaxs[p->type])
			return 2;
		return 3;
	}
#endif
	
// general case
	switch (p->signbits)
	{
	case 0:
dist1 = p->normal[0]*emaxs[0] + p->normal[1]*emaxs[1] + p->normal[2]*emaxs[2];
dist2 = p->normal[0]*emins[0] + p->normal[1]*emins[1] + p->normal[2]*emins[2];
		break;
	case 1:
dist1 = p->normal[0]*emins[0] + p->normal[1]*emaxs[1] + p->normal[2]*emaxs[2];
dist2 = p->normal[0]*emaxs[0] + p->normal[1]*emins[1] + p->normal[2]*emins[2];
		break;
	case 2:
dist1 = p->normal[0]*emaxs[0] + p->normal[1]*emins[1] + p->normal[2]*emaxs[2];
dist2 = p->normal[0]*emins[0] + p->normal[1]*emaxs[1] + p->normal[2]*emins[2];
		break;
	case 3:
dist1 = p->normal[0]*emins[0] + p->normal[1]*emins[1] + p->normal[2]*emaxs[2];
dist2 = p->normal[0]*emaxs[0] + p->normal[1]*emaxs[1] + p->normal[2]*emins[2];
		break;
	case 4:
dist1 = p->normal[0]*emaxs[0] + p->normal[1]*emaxs[1] + p->normal[2]*emins[2];
dist2 = p->normal[0]*emins[0] + p->normal[1]*emins[1] + p->normal[2]*emaxs[2];
		break;
	case 5:
dist1 = p->normal[0]*emins[0] + p->normal[1]*emaxs[1] + p->normal[2]*emins[2];
dist2 = p->normal[0]*emaxs[0] + p->normal[1]*emins[1] + p->normal[2]*emaxs[2];
		break;
	case 6:
dist1 = p->normal[0]*emaxs[0] + p->normal[1]*emins[1] + p->normal[2]*emins[2];
dist2 = p->normal[0]*emins[0] + p->normal[1]*emaxs[1] + p->normal[2]*emaxs[2];
		break;
	case 7:
dist1 = p->normal[0]*emins[0] + p->normal[1]*emins[1] + p->normal[2]*emins[2];
dist2 = p->normal[0]*emaxs[0] + p->normal[1]*emaxs[1] + p->normal[2]*emaxs[2];
		break;
	default:
		dist1 = dist2 = 0;		// shut up compiler
		BOPS_Error ();
		break;
	}

#if 0
	int		i;
	vec3_t	corners[2];

	for (i=0 ; i<3 ; i++)
	{
		if (plane->normal[i] < 0)
		{
			corners[0][i] = emins[i];
			corners[1][i] = emaxs[i];
		}
		else
		{
			corners[1][i] = emins[i];
			corners[0][i] = emaxs[i];
		}
	}
	dist = DotProduct (plane->normal, corners[0]) - plane->dist;
	dist2 = DotProduct (plane->normal, corners[1]) - plane->dist;
	sides = 0;
	if (dist1 >= 0)
		sides = 1;
	if (dist2 < 0)
		sides |= 2;

#endif

	sides = 0;
	if (dist1 >= p->dist)
		sides = 1;
	if (dist2 < p->dist)
		sides |= 2;

#ifdef PARANOID
if (sides == 0)
	Sys_Error ("BoxOnPlaneSide: sides==0");
#endif

	return sides;
}

#endif


void AngleVectors (vec3_t angles, vec3_t forward, vec3_t right, vec3_t up)
{
	float		angle;
	float		sr, sp, sy, cr, cp, cy;
	
	angle = angles[YAW] * (M_PI*2 / 360);
	sy = sin(angle);
	cy = cos(angle);
	angle = angles[PITCH] * (M_PI*2 / 360);
	sp = sin(angle);
	cp = cos(angle);
	angle = angles[ROLL] * (M_PI*2 / 360);
	sr = sin(angle);
	cr = cos(angle);

	forward[0] = cp*cy;
	forward[1] = cp*sy;
	forward[2] = -sp;
	right[0] = (-1*sr*sp*cy+-1*cr*-sy);
	right[1] = (-1*sr*sp*sy+-1*cr*cy);
	right[2] = -1*sr*cp;
	up[0] = (cr*sp*cy+-sr*-sy);
	up[1] = (cr*sp*sy+-sr*cy);
	up[2] = cr*cp;
}

int VectorCompare (vec3_t v1, vec3_t v2)
{
	int		i;
	
	for (i=0 ; i<3 ; i++)
		if (v1[i] != v2[i])
			return 0;
			
	return 1;
}

void VectorMA (vec3_t veca, float scale, vec3_t vecb, vec3_t vecc)
{
	vecc[0] = veca[0] + scale*vecb[0];
	vecc[1] = veca[1] + scale*vecb[1];
	vecc[2] = veca[2] + scale*vecb[2];
}


vec_t _DotProduct (vec3_t v1, vec3_t v2)
{
	return v1[0]*v2[0] + v1[1]*v2[1] + v1[2]*v2[2];
}

void _VectorSubtract (vec3_t veca, vec3_t vecb, vec3_t out)
{
	out[0] = veca[0]-vecb[0];
	out[1] = veca[1]-vecb[1];
	out[2] = veca[2]-vecb[2];
}

void _VectorAdd (vec3_t veca, vec3_t vecb, vec3_t out)
{
	out[0] = veca[0]+vecb[0];
	out[1] = veca[1]+vecb[1];
	out[2] = veca[2]+vecb[2];
}

void _VectorCopy (vec3_t in, vec3_t out)
{
	out[0] = in[0];
	out[1] = in[1];
	out[2] = in[2];
}

void CrossProduct (vec3_t v1, vec3_t v2, vec3_t cross)
{
	cross[0] = v1[1]*v2[2] - v1[2]*v2[1];
	cross[1] = v1[2]*v2[0] - v1[0]*v2[2];
	cross[2] = v1[0]*v2[1] - v1[1]*v2[0];
}

double sqrt(double x);

vec_t Length(vec3_t v)
{
	int		i;
	float	length;
	
	length = 0;
	for (i=0 ; i< 3 ; i++)
		length += v[i]*v[i];
	length = sqrt (length);		// FIXME

	return length;
}

float VectorNormalize (vec3_t v)
{
	float	length, ilength;

	length = v[0]*v[0] + v[1]*v[1] + v[2]*v[2];
	length = sqrt (length);		// FIXME

	if (length)
	{
		ilength = 1/length;
		v[0] *= ilength;
		v[1] *= ilength;
		v[2] *= ilength;
	}
		
	return length;

}

void VectorInverse (vec3_t v)
{
	v[0] = -v[0];
	v[1] = -v[1];
	v[2] = -v[2];
}

void VectorScale (vec3_t in, vec_t scale, vec3_t out)
{
	out[0] = in[0]*scale;
	out[1] = in[1]*scale;
	out[2] = in[2]*scale;
}


int Q_log2(int val)
{
	int answer=0;
	while ((val>>=1) != 0)
		answer++;
	return answer;
}


/*
================
R_ConcatRotations
================
*/
void R_ConcatRotations (float in1[3][3], float in2[3][3], float out[3][3])
{
	out[0][0] = in1[0][0] * in2[0][0] + in1[0][1] * in2[1][0] +
				in1[0][2] * in2[2][0];
	out[0][1] = in1[0][0] * in2[0][1] + in1[0][1] * in2[1][1] +
				in1[0][2] * in2[2][1];
	out[0][2] = in1[0][0] * in2[0][2] + in1[0][1] * in2[1][2] +
				in1[0][2] * in2[2][2];
	out[1][0] = in1[1][0] * in2[0][0] + in1[1][1] * in2[1][0] +
				in1[1][2] * in2[2][0];
	out[1][1] = in1[1][0] * in2[0][1] + in1[1][1] * in2[1][1] +
				in1[1][2] * in2[2][1];
	out[1][2] = in1[1][0] * in2[0][2] + in1[1][1] * in2[1][2] +
				in1[1][2] * in2[2][2];
	out[2][0] = in1[2][0] * in2[0][0] + in1[2][1] * in2[1][0] +
				in1[2][2] * in2[2][0];
	out[2][1] = in1[2][0] * in2[0][1] + in1[2][1] * in2[1][1] +
				in1[2][2] * in2[2][1];
	out[2][2] = in1[2][0] * in2[0][2] + in1[2][1] * in2[1][2] +
				in1[2][2] * in2[2][2];
}


/*
================
R_ConcatTransforms
================
*/
void R_ConcatTransforms (float in1[3][4], float in2[3][4], float out[3][4])
{
	out[0][0] = in1[0][0] * in2[0][0] + in1[0][1] * in2[1][0] +
				in1[0][2] * in2[2][0];
	out[0][1] = in1[0][0] * in2[0][1] + in1[0][1] * in2[1][1] +
				in1[0][2] * in2[2][1];
	out[0][2] = in1[0][0] * in2[0][2] + in1[0][1] * in2[1][2] +
				in1[0][2] * in2[2][2];
	out[0][3] = in1[0][0] * in2[0][3] + in1[0][1] * in2[1][3] +
				in1[0][2] * in2[2][3] + in1[0][3];
	out[1][0] = in1[1][0] * in2[0][0] + in1[1][1] * in2[1][0] +
				in1[1][2] * in2[2][0];
	out[1][1] = in1[1][0] * in2[0][1] + in1[1][1] * in2[1][1] +
				in1[1][2] * in2[2][1];
	out[1][2] = in1[1][0] * in2[0][2] + in1[1][1] * in2[1][2] +
				in1[1][2] * in2[2][2];
	out[1][3] = in1[1][0] * in2[0][3] + in1[1][1] * in2[1][3] +
				in1[1][2] * in2[2][3] + in1[1][3];
	out[2][0] = in1[2][0] * in2[0][0] + in1[2][1] * in2[1][0] +
				in1[2][2] * in2[2][0];
	out[2][1] = in1[2][0] * in2[0][1] + in1[2][1] * in2[1][1] +
				in1[2][2] * in2[2][1];
	out[2][2] = in1[2][0] * in2[0][2] + in1[2][1] * in2[1][2] +
				in1[2][2] * in2[2][2];
	out[2][3] = in1[2][0] * in2[0][3] + in1[2][1] * in2[1][3] +
				in1[2][2] * in2[2][3] + in1[2][3];
}


/*
===================
FloorDivMod

Returns mathematically correct (floor-based) quotient and remainder for
numer and denom, both of which should contain no fractional part. The
quotient must fit in 32 bits.
====================
*/

void FloorDivMod (double numer, double denom, int *quotient,
		int *rem)
{
	int		q, r;
	double	x;

#ifndef PARANOID
	if (denom <= 0.0)
		Sys_Error ("FloorDivMod: bad denominator %d\n", denom);

//	if ((floor(numer) != numer) || (floor(denom) != denom))
//		Sys_Error ("FloorDivMod: non-integer numer or denom %f %f\n",
//				numer, denom);
#endif

	if (numer >= 0.0)
	{

		x = floor(numer / denom);
		q = (int)x;
		r = (int)floor(numer - (x * denom));
	}
	else
	{
	//
	// perform operations with positive values, and fix mod to make floor-based
	//
		x = floor(-numer / denom);
		q = -(int)x;
		r = (int)floor(-numer - (x * denom));
		if (r != 0)
		{
			q--;
			r = (int)denom - r;
		}
	}

	*quotient = q;
	*rem = r;
}


/*
===================
GreatestCommonDivisor
====================
*/
int GreatestCommonDivisor (int i1, int i2)
{
	if (i1 > i2)
	{
		if (i2 == 0)
			return (i1);
		return GreatestCommonDivisor (i2, i1 % i2);
	}
	else
	{
		if (i1 == 0)
			return (i2);
		return GreatestCommonDivisor (i1, i2 % i1);
	}
}


#if !id386

// TODO: move to nonintel.c

/*
===================
Invert24To16

Inverts an 8.24 value to a 16.16 value
====================
*/

fixed16_t Invert24To16(fixed16_t val)
{
	if (val < 256)
		return (0xFFFFFFFF);

	return (fixed16_t)
			(((double)0x10000 * (double)0x1000000 / (double)val) + 0.5);
}

#endif