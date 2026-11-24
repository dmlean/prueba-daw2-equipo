USE [gespro_daw01]
GO
CREATE LOGIN gespro_daw01 WITH PASSWORD = 'flacido'
GO
CREATE USER gespro_daw01 FOR LOGIN gespro_daw01
GO
ALTER ROLE db_owner ADD MEMBER gespro_daw01
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[proyectos] (
	[id] [int] IDENTITY(1,1) not null,
	[nombre] [varchar] (50) not null,
	CONSTRAINT [pk_proyectos] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
go


set ansi_nulls on
go
set quoted_identifier on
go
create table [dbo].[roles] (
	[id] [int] identity(1,1) not null,
	[nombre] [varchar](50) not null,
	CONSTRAINT [pk_roles] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


set ansi_nulls on
go
set quoted_identifier on
go

CREATE TABLE [dbo].[tipos] (
	[id] [int] identity (1,1) not null,
	[nombre] [varchar] (50) not null,
	CONSTRAINT [pk_tipo] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


set ansi_nulls on
go
set quoted_identifier on
go

CREATE TABLE [dbo].[estados] (
	[id] [int] identity (1,1) not null,
	[nombre] [varchar] (50) not null,
	CONSTRAINT [pk_estados] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


set ansi_nulls on
go
set quoted_identifier on
go

create table [dbo].[usuarios] (
	[id] [int] identity(1,1) not null,
	[nombre] [varchar](50) not null,
	[apellido] [varchar](50) not null,
	[email] [varchar](150) not null,
	[contraseña] [varchar](256) not null,

	CONSTRAINT [pk_usuarios] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


set ansi_nulls on
go
set quoted_identifier on
go

CREATE TABLE [dbo].[tiene] (
	[id_usuario] [int] not null,
	[id_proyecto] [int] not null,
	[id_rol] [int] not null,

	CONSTRAINT [pk_tiene] PRIMARY KEY CLUSTERED (
		[id_usuario], [id_proyecto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


--__________________________________________________


CREATE TABLE [dbo].[tareas] (
	[id] [int] identity (1,1) not null,
	[nombre] [varchar] (50) not null,
	[descripcion] [varchar] (255) null,
	[fecha_inicio] [date] default getdate(),
	[fecha_fin] [date] null,
	[id_proyecto] [int] not null,
	[id_usuario_creador] [int] not null,
	[id_usuario_asignado] [int] null,
	[id_tipo] [int] not null,
	[id_estado] [int] not null,
	CONSTRAINT [pk_tareas] PRIMARY KEY CLUSTERED (
		[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

alter table [dbo].[tiene] with check add constraint [fk_tiene_usuarios] foreign key ([id_usuario])
references [dbo].[usuarios] ([id])
go
alter table [dbo].[tiene] check constraint[fk_tiene_usuarios]
go
alter table [dbo].[tiene] with check add constraint [fk_tiene_proyectos] foreign key ([id_proyecto])
references [dbo].[proyectos] ([id])
go
alter table [dbo].[tiene] check constraint[fk_tiene_proyectos]
go
alter table [dbo].[tiene] with check add constraint [fk_tiene_roles] foreign key ([id_rol])
references [dbo].[roles] ([id])
go
alter table [dbo].[tiene] check constraint[fk_tiene_roles]
go
alter table [dbo].[tareas] with check add constraint [fk_tareas_proyectos] foreign key ([id_proyecto])
references [dbo].[proyectos] ([id])
go
alter table [dbo].[tareas] check constraint[fk_tareas_proyectos]
go
alter table [dbo].[tareas] with check add constraint [fk_tareas_usuario_creador] foreign key ([id_usuario_creador])
references [dbo].[usuarios] ([id])
go
alter table [dbo].[tareas] check constraint[fk_tareas_usuario_creador]
go
alter table [dbo].[tareas] with check add constraint [fk_tareas_usuario_asignado] foreign key ([id_usuario_asignado])
references [dbo].[usuarios] ([id])
go
alter table [dbo].[tareas] check constraint[fk_tareas_usuario_asignado]
go
alter table [dbo].[tareas] with check add constraint [fk_tareas_tipos] foreign key ([id_tipo])
references [dbo].[tipos] ([id])
go
alter table [dbo].[tareas] check constraint[fk_tareas_tipos]
go
alter table [dbo].[tareas] with check add constraint [fk_tareas_estados] foreign key ([id_estado])
references [dbo].[estados] ([id])
go
alter table [dbo].[tareas] check constraint[fk_tareas_estados]
go