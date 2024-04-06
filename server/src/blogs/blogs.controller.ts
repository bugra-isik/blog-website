import { Controller, Get } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
  @Get()
  allBlogs() {
    return [
      {
        header: 'Vira Bismillah 1. Blog',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tellus id diam rutrum volutpat. Cras id scelerisque diam. Aliquam ac placerat tortor. Nulla facilisi. Maecenas lobortis purus et mi gravida, a commodo libero condimentum. Sed in arcu eget libero lobortis pharetra a sit amet tortor. Integer bibendum dolor a mauris sollicitudin, nec efficitur turpis blandit. Morbi quis nibh nisl. Sed venenatis augue at sem faucibus, quis feugiat eros fermentum. Ut dignissim, justo in suscipit convallis, orci sapien vestibulum justo, eget ultricies urna leo id orci. Duis et risus vitae felis ullamcorper tristique non non lacus. Etiam at tellus sed libero feugiat venenatis nec in metus. Sed pretium odio eu lectus faucibus fermentum. Nunc viverra fermentum justo, vitae hendrerit nisi pharetra a.',
      },
      {
        header: 'Vira Bismillah 2. Blog',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tellus id diam rutrum volutpat. Cras id scelerisque diam. Aliquam ac placerat tortor. Nulla facilisi. Maecenas lobortis purus et mi gravida, a commodo libero condimentum. Sed in arcu eget libero lobortis pharetra a sit amet tortor. Integer bibendum dolor a mauris sollicitudin, nec efficitur turpis blandit. Morbi quis nibh nisl. Sed venenatis augue at sem faucibus, quis feugiat eros fermentum. Ut dignissim, justo in suscipit convallis, orci sapien vestibulum justo, eget ultricies urna leo id orci. Duis et risus vitae felis ullamcorper tristique non non lacus. Etiam at tellus sed libero feugiat venenatis nec in metus. Sed pretium odio eu lectus faucibus fermentum. Nunc viverra fermentum justo, vitae hendrerit nisi pharetra a.',
      },
      {
        header: 'Vira Bismillah 3. Blog',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu tellus id diam rutrum volutpat. Cras id scelerisque diam. Aliquam ac placerat tortor. Nulla facilisi. Maecenas lobortis purus et mi gravida, a commodo libero condimentum. Sed in arcu eget libero lobortis pharetra a sit amet tortor. Integer bibendum dolor a mauris sollicitudin, nec efficitur turpis blandit. Morbi quis nibh nisl. Sed venenatis augue at sem faucibus, quis feugiat eros fermentum. Ut dignissim, justo in suscipit convallis, orci sapien vestibulum justo, eget ultricies urna leo id orci. Duis et risus vitae felis ullamcorper tristique non non lacus. Etiam at tellus sed libero feugiat venenatis nec in metus. Sed pretium odio eu lectus faucibus fermentum. Nunc viverra fermentum justo, vitae hendrerit nisi pharetra a.',
      },
    ];
  }
}
